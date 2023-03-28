module.exports = {
    token: 'any_id',
    sign(id, secret){
        this.id = id
        this.secret = secret
        return this.token
    }
}