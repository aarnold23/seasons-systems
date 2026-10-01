export default function createAuthService(
    employeeRepository,
    passwordService,
    tokenService
) {
    return {
        async authenticate(name, password) {
            const user = await employeeRepository.findByName(name);

            if (!user) {
                return {
                    success: false,
                    error: 'Invalid credentials: User does not exist!'
                };
            }

            const validPassword = await passwordService.compare(password, user.password);

            if (!validPassword) {
                return {
                    success: false,
                    error: 'Invalid credentials: Incorrect password!'
                };
            }

            return {
                success: true,
                token: tokenService.generate(user),
                user: {
                    id: user.employeeID,
                    name: user.name,
                    role: user.role,
                    department: user.department
                }
            };
        }
    };
}