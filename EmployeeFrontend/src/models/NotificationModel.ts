export default class NotificationModel
{
    static TYPES = { success: "alert-success", failure: "alert-danger", warning: "alert-warning" }

    type: String = NotificationModel.TYPES.warning;
    message: String = ""
    constructor(type: String, message: String)
    {
        this.type = type;
        this.message = message
    }
}