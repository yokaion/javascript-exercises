const ftoc = function(t_f) {
  const t_c = (t_f - 32) * (5/9);
  return Math.round(t_c * 10)/10;
};

const ctof = function(t_c) {
  const t_f = t_c * (9/5) + 32;
  return Math.round(t_f * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
