
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Chord', banner: 'Intelligent scheduling for UMass musicians.' });
}; 