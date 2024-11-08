// GetExactLocation.ts
export const getAddressFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  // Specify the return type as a Promise<string>
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch address')
    }

    const data: { display_name: string } = await response.json() // Define the expected structure of the response
    console.log('Address:', data.display_name)
    return data.display_name // Return the address
  } catch (error) {
    console.error('Error fetching address:', error)
    throw error // Re-throw the error to handle it in the component
  }
}
