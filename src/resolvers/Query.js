const users = (partent, args, context, info) => context.prisma.users();

module.exports = {
    users
};