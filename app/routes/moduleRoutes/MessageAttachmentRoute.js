/**
 * Created by EDI-SD-06 on 2/2/2017.
 */
'use strict';

var express = require('express');
var fs = require('fs');
var router = express.Router();
var ControllerMap = require('../../Controller/ControllerMap');
var attachmentUploadController = ControllerMap.UploadsController.AttachmentUploadController;
var attachmentViewController = ControllerMap.DisplayController.AttachmentViewController;


/**
 * get attachment for messages
 *
 * **/

router.get('/:token/:msgID',function (req,res,next) {
    var token = req.params.token;
    var msgID = req.params.msgID;

    attachmentViewController.getUserID(token, msgID, res);
});


/**
 * get attachment for helper messages
 *
 * **/

router.get('/helper/:token/:msgID',function (req,res,next) {
    var token = req.params.token;
    var msgID = req.params.msgID;

    attachmentViewController.getUserID(token, msgID, res);
});


/*
 * post profile image file to file manager and db
 * */

router.post('/', function (req, res, next) {

    var sampleFile = req.files.attachment;
    var token = req.body.token;
    var messsageID = req.body.msgID;

    attachmentUploadController.getUserID(token, sampleFile, messsageID, res, 1)
});

/*
 * post profile image file to file manager and db
 * */

router.post('/helper', function (req, res, next) {

    var sampleFile = req.files.attachment;
    var token = req.body.token;
    var messsageID = req.body.msgID;

    attachmentUploadController.getUserID(token, sampleFile, messsageID, res, 3)
});

module.exports = router;
