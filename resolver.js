const coursesData = require("./coursesData");

const getCourse = (args) => {
  const id = args.id;
  return coursesData.filter((course) => {
    return course.id == id;
  })[0];
};

const getCoursesByTitle = (args) => {
  if (args.title) {
    const title = args.title;
    return coursesData.filter((course) =>
      course.title.toLowerCase().includes(title.toLowerCase())
    );
  } else {
    return coursesData;
  }
};

const getCourses = (args) => {
  console.log("ok");
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
  console.log(input);
  const newInput = { ...input, id: coursesData.length + 1 };
  coursesData.push(newInput);
  return coursesData;
};

const root = {
  course: getCourse,
  getCoursesByTitle: getCoursesByTitle,
  courses: getCourses,
  coursesByTitle: getCoursesByTitle,
  updateCourseTopic: updateCourseTopic,
  createCourse: createCourse,
};

module.exports = root;
