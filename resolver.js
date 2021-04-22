const coursesData = require("./coursesData");

const getCourse = (args) => {
  const id = args.id;
  return coursesData.filter((course) => {
    return course.id == id;
  })[0];
};

const getCourseByTitle = (args) => {
  const title = args.title;
  return coursesData.filter((course) => {
    return course.title === title;
  })[0];
};

const getCourses = (args) => {
  if (args.topic) {
    const topic = args.topic;
    return coursesData.filter((course) => course.topic === topic);
  } else {
    return coursesData;
  }
};

const updateCourseTopic = ({ id, topic }) => {
  coursesData.map((course) => {
    if (course.id === id) {
      course.topic = topic;
      return course;
    }
  });
  return coursesData.filter((course) => course.id === id)[0];
};

const createCourse = ({ input }) => {
  const newInput = { ...input, id: coursesData.length + 1 };
  coursesData.push(newInput);
  return coursesData;
};

const root = {
  course: getCourse,
  courses: getCourses,
  courseByTitle: getCourseByTitle,
  updateCourseTopic: updateCourseTopic,
  createCourse: createCourse,
};

module.exports = root;
