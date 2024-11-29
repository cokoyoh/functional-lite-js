const { asyncPipe, trace } = require("../functional-utils")

const getUserById = (id) => {
  if (id === 2) {
    return Promise.resolve({ user: 'foo', role: 'bar' })
  }

  return Promise.resolve(null)
}

const isActive = (user) => {
  if (!user) return false;

  return user.role === 'bar'
}

const canPostBlog = (isActive) => {
  if (isActive) {
    return Promise.resolve({ message: 'User can post a blog'})
  }

  return Promise.resolve({ message: 'User cannot post a blog' })
}

const log = (message) => console.log(message)


/**
 * Get user
 * 
 * Determine if user is active
 * 
 * Allow the user to post their id
 */

const userPostBlog = asyncPipe(getUserById, trace('User'), isActive, trace('Is Active'), canPostBlog, trace('Message Received'));

userPostBlog(3).then(log)
