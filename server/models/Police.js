const { Schema, connection } = require('mongoose')

const Police = new Schema(
  {
    name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid username`,
      ],
      required: [true, 'Please add a Username'],
    },
    branch_name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        (props) => `${props.value} is not a valid branch name`,
      ],
      required: [true, 'Please add a Branch Name'],
    },
    coordinates: {
      type: Object,
      required: [true, 'Please add a Coordinates'],
    },
    password: {
      type: String,
      required: [true, 'Please add a Password'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = connection.useDb('WithU').model('Police', Police)