class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }

    async getProfile(req, res) {
        const { userId } = req.params;

        try {
            const user = await this.profileService.fetchUser(userId);
            const products = await this.profileService.fetchProducts(userId);

            return res.status(200).json({
                user,
                products
            });
        } catch (error) {
            return res.status(500).json({ message: 'An error occurred while fetching profile data', error: error.message });
        }
    }
}

// change export to CommonJS
module.exports = ProfileController;