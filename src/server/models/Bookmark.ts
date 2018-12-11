import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Bookmark = new Schema({
  href: {
    type: 'string'
  },
  name: {
    type: 'string'
  }
});

export default mongoose.model('Bookmark', Bookmark);
