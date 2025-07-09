const supabase = require('../config/supabase');

class MenuItem {
  static async findAll() {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(`Error fetching menu items: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(`Error fetching menu item: ${error.message}`);
    }
  }

  static async create(menuItemData) {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .insert([menuItemData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(`Error creating menu item: ${error.message}`);
    }
  }

  static async update(id, updateData) {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(`Error updating menu item: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      throw new Error(`Error deleting menu item: ${error.message}`);
    }
  }

  static async insertMany(items) {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .insert(items)
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(`Error inserting menu items: ${error.message}`);
    }
  }

  static async deleteMany() {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .neq('id', 0); // Delete all records
      
      if (error) throw error;
      return true;
    } catch (error) {
      throw new Error(`Error deleting menu items: ${error.message}`);
    }
  }
}

module.exports = MenuItem;