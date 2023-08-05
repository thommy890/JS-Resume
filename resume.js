// Function to capitalize the name
function capitalizeName(name) {
    return name.toUpperCase();
}

// Function to display job position details
function displayPosition(company, jobTitle, description) {
    console.log(`* ${jobTitle} at ${company}`);
    console.log(`  ${description}\n`);
}

// Function to display skills
function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log(`* BAM: ${skillName}`);
    } else {
        console.log(`* ${skillName}`);
    }
}

// Resume Data
const fullName = "THOMSON KNOLES";
const title = "Full Stack Engineer / Professional Musician";
const description = "I like Isopods";

const interests = [
    "Music",
    "Skateboarding",
    "Writing Code",
    "Producing Music",
];

const previousExperience = [
    {
        company: "Music Co.",
        jobTitle: "Music theory, Music Production, Photoshop, Final Cut Pro.",
        description: "Developed and produced music using various software tools.",
    },
    {
        company: "Piano Academy",
        jobTitle: "Piano Teacher",
        description: "Provided piano lessons to students of different skill levels.",
    },
    {
        company: "The Fritz",
        jobTitle: "Music Director and Composer",
        description: "Led the music team and composed music for various projects.",
    },
];

const skills = [
    { name: "Cooking", isCool: false },
    { name: "Piano", isCool: true },
    { name: "Java", isCool: true },
    { name: "C / C++", isCool: true },
    { name: "Logic Pro X", isCool: true },
    { name: "Hammond Organ", isCool: true },
    { name: "JavaScript", isCool: true },
    { name: "TypeScript", isCool: true },
    { name: "Gardening", isCool: false },
];

// Function to print the resume
function printResume() {
    const capitalizedFullName = capitalizeName(fullName);

    console.log(`========== Resume: ${capitalizedFullName} ==========\n`);
    console.log(`Career: ${title}\n`);
    console.log(`Description: ${description}\n`);

    console.log("My Interests:");
    interests.forEach((interest) => {
        console.log(`* ${interest}`);
    });
    console.log("");

    console.log("My Previous Experience:");
    previousExperience.forEach((experience) => {
        displayPosition(experience.company, experience.jobTitle, experience.description);
    });
    console.log("");

    console.log("My Skills:");
    skills.forEach((skill) => {
        displaySkill(skill.name, skill.isCool);
    });
}

// Call the function to print the resume
printResume();
