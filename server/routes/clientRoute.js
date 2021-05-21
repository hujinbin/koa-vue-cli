async function clientRoute(ctx, next) {
    await ctx.render('index',{
        title: '',
        root:'',
    });
    await next();
}

export default clientRoute;
