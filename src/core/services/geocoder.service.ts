export class GeocoderService {
    fetchAddressFromCoords = async (lat: number, lng: number) => {
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
