module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e19d0b7f95eb15db208ea684cf537295'),
  },
});
