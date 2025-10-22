//Update time
const timeEl = document.getElementById("user-time");
if (timeEl) {
  function updateUserTime() {
    timeEl.textContent = new Date().toLocaleTimeString();
  }
  updateUserTime();
  setInterval(updateUserTime, 1000);
}

// Handle avatar upload (only if file input exists)
const fileInput = document.getElementById("avatar-upload");
const avatarImg = document.getElementById("user-avatar");
if (fileInput && avatarImg) {
  const savedAvatar = localStorage.getItem("profile-avatar");
  if (savedAvatar) avatarImg.src = savedAvatar;

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        avatarImg.src = imageDataUrl;
        localStorage.setItem("profile-avatar", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  });
}

//Creating Regular Expressions
const nameRegularExpression = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const emailRegularExpression = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const messageRegularExpression = /^[A-Za-z ]+$/;

const form = document.getElementById("contactForm");
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitButton = document.querySelector("button");
const successMessage = document.querySelector('.success');

//Validation
if (form) {
  const validateName = (name) => {
    let validatedName = nameRegularExpression.test(name.trim());
    let errorMessage = document.getElementById("error-name");

    if (validatedName) {
      errorMessage.innerText = '';
      return true
    } else {
      errorMessage.innerText = 'This field is required'
      return false
    }
  }

  const validateEmail = (email) => {
    let validatedEmail = emailRegularExpression.test(email);
    let errorMessage = document.getElementById("error-email");

    if (validatedEmail) {
      errorMessage.innerText = '';
      return true
    } else {
      errorMessage.innerText = 'Invalid Email'
      return false
    }
  }

  const validateSubject = (subject) => {
    const errorMessage = document.getElementById("error-subject");
    let isValid = true;

    if (subject.trim() === '') {
      isValid = false;
      errorMessage.innerText = 'Subject cannot be Empty.'
    } else if (subject.length < 5) {
      isValid = false;
      errorMessage.innerText = 'Subject must be at least 5 characters long.'
    } else if (subject.length > 50) {
      isValid = false;
      errorMessage.innerText = 'Subject cannot exceed 50 characters'
    } else if (!messageRegularExpression.test(subject)) {
      isValid = false;
      errorMessage.innerText = 'Subject can only contain letters and spaces'
    } else {
      errorMessage.innerText = '';
    }

    return isValid
  }

  const validateMessage = (message) => {
    const errorMessage = document.getElementById("error-message");
    let isValid = true;

    if (message.trim() === '') {
      isValid = false;
      errorMessage.innerText = 'Message cannot be Empty.'
    } else if (message.length < 10) {
      isValid = false;
      errorMessage.innerText = 'Message must be at least 10 characters long.'
    } else if (message.length > 500) {
      isValid = false;
      errorMessage.innerText = 'Message cannot exceed 500 characters'
    } else if (!messageRegularExpression.test(message)) {
      isValid = false;
      errorMessage.innerText = 'Message can only contain letters and spaces'
    } else {
      errorMessage.innerText = '';
    }

    return isValid
  }

  //Test Validation
  fullName.onkeyup = () => {
    validateName(fullName.value.trim()) //This prevents the user from typing only spaces
  }
  emailAddress.onkeyup = () => {
    validateEmail(emailAddress.value)
  }
  subjectInput.onkeyup = () => {
    validateSubject(subjectInput.value)
  }
  messageInput.onkeyup = () => {
    validateMessage(messageInput.value)
  }

  if (form && submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      //Check Validation
      const nameValid = validateName(fullName.value);
      const emailValid = validateEmail(emailAddress.value);
      const subjectValid = validateSubject(subjectInput.value);
      const messageValid = validateMessage(messageInput.value);
      
      if (!nameValid) {
        fullName.focus();
      } else if (!emailValid) {
        emailAddress.focus();
      } else if (!subjectValid) {
        subjectInput.focus();
      } else if (!messageValid) {
        messageInput.focus();
      } else {
        successMessage.hidden = false
        successMessage.style.display = "block";  //Show success message and hide it after some seconds
        
        form.reset();

        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      }
    })
  }
}