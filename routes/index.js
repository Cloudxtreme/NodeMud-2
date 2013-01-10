/**
 * Created with IntelliJ IDEA.
 * User: damian.reeves
 * Date: 1/10/13
 * Time: 7:40 AM
 * To change this template use File | Settings | File Templates.
 */

exports.index = function(req, res) {
  res.render('index', {title: 'NodeMud'});
};