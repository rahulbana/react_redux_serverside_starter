import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  firstname : { type: String, required: true, trim: true },
  lastname : { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  created_at : { type: Date },
  updated_at : { type: Date }
})

UserSchema.pre('save', function(next){
  const now = new Date()
  this.updated_at = now
  if ( !this.created_at ) {
    this.created_at = now
  }
  next()
})

export default mongoose.model('User9s', UserSchema)
