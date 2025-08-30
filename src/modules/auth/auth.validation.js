import joi from 'joi'


export const signup=joi.object({
  username:joi.string().min(2).max(30).required(),
  email:joi.string().email({minDomainSegments:2,maxDomainSegments:3,tlds:{allow:['com','edu']}}).required(),
  password:joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)).required(),
  confirmpassword:joi.string().valid(joi.ref('password')).required(),
  phone:joi.string().pattern(RegExp(/^(?:\+20|0020|0)?1[0125][ -]?\d{4}[ -]?\d{4}$/)).required()
})

export const login=joi.object({
  email:joi.string().email({minDomainSegments:2,maxDomainSegments:3,tlds:{allow:['com','edu']}}).required(),
  password:joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)).required(),
})

