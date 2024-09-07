const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

const resumeData = {
  personal: {
    name: 'John Doe',
    title: 'Software Developer',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe'
  },
  education: [
    {
      school: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      period: '2015 - 2019'
    },
    {
      school: 'Another University',
      degree: 'Master of Science in Software Engineering',
      period: '2019 - 2021'
    }
  ],
  experience: [
    {
      company: 'Company Name',
      title: 'Software Developer',
      period: 'June 2021 - Present',
      responsibilities: [
        'Developed and maintained web applications using React.js.',
        'Collaborated with cross-functional teams to deliver high-quality software.'
      ]
    },
    {
      company: 'Another Company',
      title: 'Junior Developer',
      period: 'July 2019 - May 2021',
      responsibilities: [
        'Assisted in the development of internal tools using JavaScript and Python.',
        'Participated in code reviews and contributed to team knowledge sharing.'
      ]
    }
  ],
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML & CSS',
    'Python',
    'Git & GitHub'
  ],
  projects: [
    {
      name: 'Project Name',
      description: 'Short description of the project.',
      technologies: 'React.js, Node.js, MongoDB',
      link: 'https://github.com/johndoe/project'
    },
    {
      name: 'Another Project',
      description: 'Short description of the project.',
      technologies: 'Python, Flask, PostgreSQL',
      link: 'https://github.com/johndoe/another-project'
    }
  ]
};

app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
