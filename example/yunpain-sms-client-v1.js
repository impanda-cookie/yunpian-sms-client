/**
 * Created by cowpanda on 8/11/15.
 */
var yunpainSMSClient = require('../lib').v1;
/**
 * 普通短信发送示例
 */
var text = '【xxxxx】您的短信验证码为：23845';
var c = new yunpainSMSClient({
    apiKey: 'your app key',
    sendContent: text,
    mobile: ['your mobile']
});

c.sendSMS(function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result)
});

//=================================================

/**
 * 模板短信发送示例
 */
var t = new yunpainSMSClient({
    apiKey: 'your app key',
    templateId: 1411507,
    templateValue: "#code#=1234",
    mobile: ['your mobile']
});

t.sendSMSByTemplate(function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result)
});
