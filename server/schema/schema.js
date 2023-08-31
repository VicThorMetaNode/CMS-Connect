//bring data from sample data folder
// const { coaches, projects } = require("../sampleData");

//Mongoose models
const Project = require("../models/Project");
const Coach = require("../models/Coach");

//when using difference sources as projects and clients we need to create TYPES
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
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

//MUTATIONS
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //ADD COACH
    addCoach: {
      type: CoachType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        role: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const coach = new Coach({
          name: args.name,
          role: args.role,
          email: args.email,
          phone: args.phone,
        });

        return coach.save();
      },
    },
    // DELETE COACH
    deleteCoach: {
      type: CoachType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // Project.find({ clientId: args.id }).then((projects) => {
        //   projects.forEach((project) => {
        //     project.deleteOne();
        //   });
        // });
        return Coach.findByIdAndRemove(args.id);
      },
    },
    // ADD PROJECT
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              backLog: { value: "BackLog" },
              springLog: { value: "SpringLog" },
              progress: { value: "In Progress" },
              review: { value: "Under Review" },
              validation: { value: "Waiting Validation" },
              discarded: { value: "Discarded" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        coachId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          coachId: args.clientId,
        });

        return project.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
