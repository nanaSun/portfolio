var gulp = require('gulp');
var connect = require('gulp-connect');
var port=80;

var connectServer = function() {
  return connect.server({
    root: 'public',
    port: port
  });
};

function handleError(err) {
  console.log(err.toString());
  process.exit(-1);
}
gulp.task('connect', function() {
  return connect.server({
    root: 'dist',
    port: port
  });
});
gulp.task('server', ['connect']);