import { useMutation } from "@tanstack/react-query"

export const useMutationHooks = (fnCallback: any) => {
    const mutation = useMutation({
        mutationFn: fnCallback

    });
    return mutation;
};