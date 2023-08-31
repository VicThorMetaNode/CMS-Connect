//bring data from sample data folder
// const { coaches, projects } = require("../sampleData");

//Mongoose models
const Project = require("../models/Project");
const Coach = require("../models/Coach");
//when using difference sources as projects and clients we need to create types
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
//CLIENT TYPE
const CoachType = new GraphQLObjectType({
  name: "Coach",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    role: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//PROJECT TYPE
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    coach: {
      type: CoachType,
      resolve(parent, args) {
        // return coaches.find((coach) => coach.id === parent.coachId); when testing from sampleData.js
        return Coach.findById(parent.coachId);
      },
    },
  }),
});

//Route query object for both projects & coaches
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      //no args cause we want the whole list
      resolve(parent, args) {
        // return projects; when testing from sampleData.js
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return projects.find((project) => project.id === args.id); when testing from sampleData.js
        return Project.findById(args.id);
      },
    },
    coaches: {
      type: new GraphQLList(CoachType),
      //no args cause we want the whole list
      resolve(parent, args) {
        // return coaches;
        return Coach.find();
      },
    },
    coach: {
      type: CoachType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return coaches.find((coach) => coach.id === args.id);
        return Coach.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
