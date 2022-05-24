interface TweetBody {
  Image?: string
  ProfilePic: string
  Tweet: string
  username: string
}

interface Tweet extends TweetBody {
  _createdAt: string
  _updatedAt: string
  _id: '7b9c5379-4710-4529-8f96-f90a1b080be8'
  _rev: 'ZRH6ZdBMeV906OhKdmvv3P'
  _type: 'tweet'
}
