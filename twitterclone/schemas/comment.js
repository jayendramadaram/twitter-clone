export default {
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    {
      name: 'Comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'username',
      type: 'string',
    },
    {
      name: 'ProfilePic',
      title: 'ProfilePic',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'REFER UR TWEET HERE',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
  ],
}
