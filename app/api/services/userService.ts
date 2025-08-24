import client from '../client';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const userService = {
  // Register a new user
  register: (user: Omit<User, 'id'>) => {
    return client.post<User>('/register', user);
  },

  // Login a user
  login: (email: string, password: string) => {
    return client.post<{ token: string }>('/login', { email, password });
  },

  // Logout a user
  logout: () => {
    return client.post('/logout');
  },

  // Enroll 

  // verify-transaction

 //   authenticte


  // Get all users
  getUsers: () => {
    return client.get<User[]>('/users');
  },

  // Get user by ID
  getUser: (id: number) => {
    return client.get<User>(`/users/${id}`);
  },

  // Create a new user
  createUser: (user: Omit<User, 'id'>) => {
    return client.post<User>('/users', user);
  },

  // Update a user
  updateUser: (id: number, user: Partial<User>) => {
    return client.put<User>(`/users/${id}`, user);
  },

  // Delete a user
  deleteUser: (id: number) => {
    return client.delete(`/users/${id}`);
  },



};