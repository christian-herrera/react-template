// npm install @supabase/supabase-js @supabase/ssr
import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)

export async function getRowsTest() {
    const { data, error } = await supabase.from('test-react-db').select('*');

    if(error) {
        return { error: true, message: error.message }
    }

    return { error: false, data }
}