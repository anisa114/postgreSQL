
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('milestones', table => {
        table.integer('famous_person_id').references('famous_people.id')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('milestones', table => {
        table.dropColumn('famous_person_id')
      })
};
