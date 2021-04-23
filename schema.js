const { buildSchema } = require("graphql");

// GraphQL schema
const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        coursesByTitle(title: String): [Course]
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
        createCourse(input: CourseInput): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    input CourseInput {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String

    }
`);

module.exports = schema;
