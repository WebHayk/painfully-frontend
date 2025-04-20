export class GeocoderService {
    fetchAddressFromCoords = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
            )
            const data = await response.json()
            return data.display_name;
        } catch (error) {
            console.error("Reverse geocoding failed:", error);
        }
    }
}
