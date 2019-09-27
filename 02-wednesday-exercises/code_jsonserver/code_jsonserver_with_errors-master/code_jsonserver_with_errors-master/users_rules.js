rules = {
  users : {
    age :  {type: Number, min : 3, max : 99, required : true},
    name:  {type: String, min: 2,required : true},
    gender:{type: "enum", values :["male","female"],required: true },
    email: {type: "email", required: true}
  }
}

module.exports= rules;