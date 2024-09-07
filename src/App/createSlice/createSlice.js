import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    personal: {
      name:`Ram Javvadi`,
      title: 'Front-End Web Developer',
      Data:'I am a Front-End Developer specializing in building dynamic, responsive web applications with a focus on seamless user experiences.',
      email: 'javvadisairam18@gmail.com',
      phone: '9017657389',
      linkedin: 'www.linkedin.com/in/sairam-javvadi',
    },
    education: [
      {
        school: 'Christian Brothers Unversity',
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
  },
  status: 'idle',
  error: null,
};

const resumeSlice = createSlice({
  name: 'saiResume',
  initialState,
  reducers: {
    setResumeData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setResumeData, setStatus, setError } = resumeSlice.actions;
export default resumeSlice.reducer;