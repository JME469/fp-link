export function logout(router) {
    // Clear token from localStorage
    localStorage.removeItem('token');
  
    // Redirect to login page
    router.push('/');
  }