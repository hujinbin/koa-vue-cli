async function reactRoute(ctx, next) {
    await ctx.render('index',{
        title: '',
        root:'',
    });
    await next();
}

export default reactRoute;
