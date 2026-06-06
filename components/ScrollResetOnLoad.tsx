"use client";

import { useEffect } from "react";

/**
 * Forza el wrapped a arrancar siempre desde el slide 1 al refrescar.
 * Por default los browsers preservan la posición de scroll y/o respetan el
 * hash de la URL — queremos sobreescribir ambos.
 */
export function ScrollResetOnLoad() {
  useEffect(() => {
    // 1. Desactivar la restauración automática del browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Limpiar hash (#slide-XX) sin recargar la página
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 3. Llevar al tope. instant para evitar el efecto smooth al cargar.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return null;
}
