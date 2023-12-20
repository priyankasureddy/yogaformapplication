function submitForm() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const batch = document.getElementById('batch').value;
  
    // Validate age within the range of 18-65
    if (isNaN(age) || age < 18 || age > 65) {
      alert('Age must be between 18 and 65.');
      return;
    }
  
    // Process the form data (you can replace this with your backend logic)
    console.log('Form submitted:', { name, age, batch });
    alert('Form submitted successfully!');
  }
  