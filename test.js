var AWS     = require('aws-sdk');
var fs      = require('fs');
var http    = require('https');
var url     = require('url');
const r         = require("request")
r.debug         = true;
var jsonRequest = r.defaults({ json: true });
const fetch = require('node-fetch');

let writeS3Object = async (stream, s3ObjectUrl) => {
	// Write file stream to S3 object based on s3ObjectUrl
	// Please assume any configuration needed to connect with AWS S3
	// ...

	// s2 config
	var s3 = new AWS.S3({
		accessKeyId      : "accessKeyId",
		secretAccessKey  : "secretAccessKey",
		region           : 'region',
		signatureVersion : 'v4'
	});

	var params = {
		Bucket               : "BucketName", // BucketName
		Key                  : 'public/'+stream.path, // folder and File name you want to save as in S3
		ServerSideEncryption : 'AES256',
		ContentType          : 'image/png', //set default meme
		Body                 : stream // filestream
	};



	s3.upload(params, function(err, data) {
	if (err) {
		throw err;
	}
		var image_url = data.Location;
		var from      = `https://${params.Bucket}.s3.ap-southeast-1.amazonaws.com`;
		image_url     = image_url.replace(from, s3ObjectUrl)

		// after upload chg endpoint url
		console.log(`File uploaded successfully.\n${image_url}`);
	});

}


let readS3Object = async (s3ObjectUrl) => {
	var fileStream;
	// Read file stream from the S3 object based on s3ObjectUrl
	// Please assume any configuration needed to connect with AWS S3
	// ...

	fetch(s3ObjectUrl)
	.then(res => res.buffer())
	.then(function(fileStream) {
		// conver it to bufer
		return fileStream;
	});
}
