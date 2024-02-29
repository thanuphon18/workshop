export const cookieName = "authSession";
export const cookieNameUnseal = `${cookieName}-unseal`;
export const cookieNameRole = `${cookieName}-role`;
export const cookieAgeInDay = 1;

export const sessionOptions = {
  password: process.env.NEXT_PUBLIC_AUTH_COOKIE_SEAL,
  cookieName: cookieName,
  cookieOptions: {
    httpOnly: false,
    secure: false,
  },
  ttl: Number(60 * 60 * 24 * cookieAgeInDay),
};
