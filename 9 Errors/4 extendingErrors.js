/** Extending Errors
 * Error constructor is an object that we can extend.
 * So we can define our own set of error for projects to use throughout the app
*/

class authenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
        this.message = message
    }
}
class PermissionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PermissionError'
        this.message = message
        this.favouriteSnack = 'grapes'
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.message = message
    }
}

throw new PermissionError('A permission error')