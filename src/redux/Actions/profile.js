
import { ADD_PROFILE, CAMPAIGN, THEME, AVATAR } from './types';

export const addProfile = profile => {
  return {
    type: ADD_PROFILE,
    payload: profile
  }
}

export const setCampaign = campaign => {
  return {
    type: CAMPAIGN,
    payload: campaign
  }
}

export const darkTheme = darkTheme => {
  return {
    type: THEME,
    payload: darkTheme
  }
}

export const setAvatar = setAvatar => {
  return {
    type: AVATAR,
    payload: setAvatar
  }
}