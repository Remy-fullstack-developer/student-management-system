// ==========================================
// STUDENT MANAGEMENT SYSTEM
// JavaScript Fundamentals Project
// ==========================================

// Store all registered students.
const students = [];

// ==========================================
// 1. REGISTER A STUDENT
// ==========================================

function registerStudent() {
    const registrationNumber = prompt("Enter registration number:");
    const name = prompt("Enter student name:");
    const ageInput = prompt("Enter student age:");
    const course = prompt("Enter student course:");

    // Handle cancellation.
    if (
        registrationNumber === null ||
        name === null ||
        ageInput === null ||
        course === null
    ) {
        console.log("Registration cancelled.");
        return;
    }

    // Clean the input.
    const normalizedRegistrationNumber = registrationNumber.trim();
    const normalizedName = name.trim();
    const normalizedCourse = course.trim();
    const age = Number(ageInput);

    // Validate required fields.
    if (
        normalizedRegistrationNumber === "" ||
        normalizedName === "" ||
        normalizedCourse === ""
    ) {
        console.log("Error: All fields must be completed.");
        return;
    }

    // Validate age.
    if (ageInput.trim() === "" || !Number.isFinite(age) || age <= 0) {
        console.log("Error: Enter a valid age greater than zero.");
        return;
    }

    // Prevent duplicate registration numbers.
    const studentExists = students.find(function (student) {
        return (
            student.registrationNumber.toLowerCase() ===
            normalizedRegistrationNumber.toLowerCase()
        );
    });

    if (studentExists) {
        console.log("Error: This registration number already exists.");
        return;
    }

    // Create a new student object.
    const newStudent = {
        registrationNumber: normalizedRegistrationNumber,
        name: normalizedName,
        age: age,
        course: normalizedCourse
    };

    // Store the student.
    students.push(newStudent);

    console.log("Student registered successfully!");
}

// ==========================================
// 2. VIEW ALL STUDENTS
// ==========================================

function viewStudents() {
    if (students.length === 0) {
        console.log("No students have been registered yet.");
        return;
    }

    console.log("\n========== REGISTERED STUDENTS ==========");

    students.forEach(function (student, index) {
        console.log(`Student ${index + 1}`);
        console.log(`Registration Number: ${student.registrationNumber}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Course: ${student.course}`);
        console.log("------------------------------------------");
    });
}

// ==========================================
// 3. SEARCH FOR A STUDENT
// ==========================================

function searchStudent() {
    const registrationNumber = prompt(
        "Enter the registration number to search:"
    );

    if (registrationNumber === null) {
        console.log("Search cancelled.");
        return;
    }

    const searchNumber = registrationNumber.trim();

    if (searchNumber === "") {
        console.log("Error: Registration number cannot be empty.");
        return;
    }

    const student = students.find(function (student) {
        return (
            student.registrationNumber.toLowerCase() ===
            searchNumber.toLowerCase()
        );
    });

    if (student) {
        console.log("\nStudent found!");
        console.log(`Registration Number: ${student.registrationNumber}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Course: ${student.course}`);
    } else {
        console.log("Student not found.");
    }
}

// ==========================================
// 4. DELETE A STUDENT
// ==========================================

function deleteStudent() {
    const registrationNumber = prompt(
        "Enter the registration number of the student to delete:"
    );

    if (registrationNumber === null) {
        console.log("Deletion cancelled.");
        return;
    }

    const searchNumber = registrationNumber.trim();

    if (searchNumber === "") {
        console.log("Error: Registration number cannot be empty.");
        return;
    }

    const studentExists = students.some(function (student) {
        return (
            student.registrationNumber.toLowerCase() ===
            searchNumber.toLowerCase()
        );
    });

    if (!studentExists) {
        console.log("Student not found. Nothing was deleted.");
        return;
    }

    const remainingStudents = students.filter(function (student) {
        return (
            student.registrationNumber.toLowerCase() !==
            searchNumber.toLowerCase()
        );
    });

    // Update the original array.
    students.length = 0;
    students.push(...remainingStudents);

    console.log("Student deleted successfully!");
}

// ==========================================
// 5. DISPLAY THE MENU
// ==========================================

function showMenu() {
    console.log("\n================================");
    console.log("   STUDENT MANAGEMENT SYSTEM");
    console.log("================================");
    console.log("1. Register Student");
    console.log("2. View All Students");
    console.log("3. Search Student");
    console.log("4. Delete Student");
    console.log("5. Exit");
    console.log("================================");
}

// ==========================================
// 6. RUN THE APPLICATION
// ==========================================

function startApplication() {
    let isRunning = true;

    while (isRunning) {
        showMenu();

        const choice = prompt("Enter your choice (1-5):");

        // Stop if the user cancels the menu.
        if (choice === null) {
            console.log("Application closed.");
            break;
        }

        switch (choice.trim()) {
            case "1":
                registerStudent();
                break;

            case "2":
                viewStudents();
                break;

            case "3":
                searchStudent();
                break;

            case "4":
                deleteStudent();
                break;

            case "5":
                isRunning = false;
                console.log("Thank you for using the application!");
                break;

            default:
                console.log("Invalid choice. Please select 1-5.");
        }
    }
}

// Start the application.
startApplication();