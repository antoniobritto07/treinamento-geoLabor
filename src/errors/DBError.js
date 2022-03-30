class DBError extends Error {
    table;
    error;
    constructor(msg, table, error) {
        super(msg);
        this.message = msg;
        this.name = "Database Error";
        this.table = table;
        this.error = error;
    }
}

module.exports = DBError;