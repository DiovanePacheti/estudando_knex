const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURN trigger AS $$
BEGIN
	NEW.updated_at = now();
	RETURN NEW;
END;
$$ 
`
const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp()
`

exports.up = async function(knex){
	return knex.raw(CUSTOM_FUNCTIONS)
}