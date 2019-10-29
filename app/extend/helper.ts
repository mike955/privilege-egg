export default {
  parseInt(str: string | number) {
    if (typeof str === "number") return str;
    if (!str) return 0;
    return parseInt(str) || 0;
  },

  success(ctx, data: object) {
    ctx.body = {
      errno: 0,
      data
    };
    ctx.status = 200;
  },

  error(ctx, errMsg) {
    ctx.body = {
      errno: 1,
      errMsg
    };
    ctx.status = 200;
  }
};
