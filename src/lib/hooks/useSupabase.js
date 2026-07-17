// Servicio
import { getRowsTest } from "../services/supabaseService";


export default function useSupabase() {
    async function getRows() {
        try {
            const resp = await getRowsTest(); // -> Servicio

            if (resp.error) {
                return { error: true, message: resp.message };
            }

            return { error: false, data: resp.data };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    return {getRows}
}