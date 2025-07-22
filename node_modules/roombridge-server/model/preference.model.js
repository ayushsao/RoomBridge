import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gender_preference: { type: String, enum: ['Male', 'Female', 'No Preference'], default: 'No Preference' },
  budget_min: { type: Number },
  budget_max: { type: Number },
  preferences: {
    type: [String],
    enum: [
      'NIGHT OWL', 'PARTY LOVER', 'EARLY BIRD', 'STUDIOUS',
      'FITNESS FREAK', 'PET LOVER', 'VEGAN', 'NON ALCOHOLIC',
      'SPORTY', 'MUSIC LOVER', 'WANDERER', 'NON SMOKER'
    ],
  },
});

const Preference = mongoose.model('Preference', preferenceSchema);

export default Preference;
